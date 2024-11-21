import { HStack, Icon, VStack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import { RiVideoAddFill } from 'react-icons/ri'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from '@/components/ui/file-button'
import { addVideo } from '@/http/video'
import { getLanguageCodeByFlag } from '@/utils/enum/flags'

export const VideoUploaderModal = ({ open, setOpen, refecth }) => {
  const languages = ['🇧🇷', '🇺🇸', '🇪🇸', '🇫🇷', '🇩🇪', '🇮🇹', '🇯🇵']

  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = async (data) => {
    try {
      data.userId = 'f66438cd-7098-4999-81cd-8c99a0989606'
      data.originalLanguage = getLanguageCodeByFlag(data.originalLanguage)
      data.targetLanguage = getLanguageCodeByFlag(data.targetLanguage)

      if (data.originalLanguage === data.targetLanguage) {
        toast.error('O idíoma de origem deve ser diferente do idíoma desejado')
        return
      }

      if (!data.file) {
        toast.error('Faça o upload de um vídeo')
        return
      }

      const formData = new FormData()
      formData.append('file', data.file)
      formData.append('originalLanguage', data.originalLanguage)
      formData.append('targetLanguage', data.targetLanguage)
      formData.append('userId', data.userId)

      await addVideo(formData)
      toast.success('Video enviado para tradução!')
      refecth()
      setOpen(false)
    } catch (error) {
      alert('Erro de rede: ' + error.message)
    }
  }

  return (
    <>
      <DialogRoot
        size="lg"
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <DialogContent className="bg-neutral-800">
          <DialogHeader className="p-5 mt-4">
            <DialogTitle className="text-2xl font-semibold">
              Tradução de vídeo
            </DialogTitle>
          </DialogHeader>
          <></>
          <DialogBody className="mx-6">
            <p>
              O modal de tradução de vídeo permite carregar um vídeo, selecionar
              o idioma de origem e o idioma desejado para tradução
            </p>
            <p className="mt-2">
              Após a seleção, o sistema processará o vídeo, adicionará legendas
              traduzidas e/ou criará uma versão dublada no idioma escolhido.
              Você pode acompanhar o status da tradução em tempo real e acessar
              o vídeo traduzido assim que o processo for concluído
            </p>
            <HStack py="7" justify="space-around" maxW="30">
              <VStack>
                <h3>Língua original</h3>
                <select
                  className="text-6xl bg-neutral-800"
                  id="from_language"
                  name="from_language"
                  {...register('originalLanguage')}
                >
                  {languages.map((language, index) => (
                    <option
                      key={index}
                      value={language}
                      style={{ fontSize: '1.5rem', padding: '10px' }}
                    >
                      {language}
                    </option>
                  ))}
                </select>
              </VStack>
              <Icon>
                <FaArrowRight className="text-3xl text-white" />
              </Icon>
              <VStack>
                <h3>Língua desejada</h3>
                <select
                  className="text-6xl bg-neutral-800"
                  id="from_language"
                  name="from_language"
                  {...register('targetLanguage')}
                >
                  {languages.map((language, index) => (
                    <option
                      key={index}
                      value={language}
                      style={{ fontSize: '1.5rem', padding: '10px' }}
                    >
                      {language}
                    </option>
                  ))}
                </select>
              </VStack>
            </HStack>
            <FileUploadRoot
              maxFiles={1}
              alignItems="stretch"
              onChange={(event) => {
                const file = event.target.files?.[0] // Obtém o primeiro arquivo
                if (file) setValue('file', file) // Atualiza o valor no formulário
              }}
            >
              <FileUploadDropzone
                label="Drag and drop here to upload"
                description=".mp4"
                accept=".mp4"
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-neutral-700"
              />
              <FileUploadList showSize clearable />
            </FileUploadRoot>
          </DialogBody>

          <DialogFooter className="mx-6 my-6">
            <Button
              className="bg-teal-900 text-teal-200 p-5 pt-7 pb-7 rounded-lg"
              onClick={handleSubmit(onSubmit)}
            >
              Traduzir
              <RiVideoAddFill />
            </Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  )
}
