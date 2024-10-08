import styles from "../ui/login/login.module.css"

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.welcomeText}>Bem Vindo de volta! 🐳</h1>
        <p className={styles.subText}>
          Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
        </p>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
          />
          <a href="#" className={styles.forgotPassword}>Esqueceu a senha?</a>
          <button type="submit" className={styles.signInButton}>Login</button>
        </form>

        <div className={styles.divider}>
          <span>Ou</span>
        </div>

        <div className={styles.socialLogin}>
          <button className={styles.googleButton}>Sign in with Google</button>
          <button className={styles.facebookButton}>Sign in with Facebook</button>
        </div>

        <p className={styles.signUpText}>
          Ainda não possue uma conta? <a href="#">Se inscreva</a>
        </p>
      </div>
      
        <div className={styles.separador}>
            <div className={styles.sideImage}>
                {/* Aqui pode inserir a imagem ou o background desejado */}
                <img src="/beluga-white 1.svg" alt="Whale Logo" className={styles.image}/>
            </div>
        </div>
    </div>
  );
}
