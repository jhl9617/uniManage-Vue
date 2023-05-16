import HomeHeader from '../components/common/PageHeader.vue'
import Footer from '../components/common/PageFooter.vue'
import SignIn from '../views/auth/Signin.vue'
import SignUp from '../views/auth/Signup.vue'

export const AuthRouters = [
  {
    path: '/auth/signin',
    name: 'SignIn',
    components: {
      header: HomeHeader,
      default: SignIn,
      footer: Footer
    }
  },
  {
    path: '/auth/signup',
    name: 'SignUp',
    components: {
      header: HomeHeader,
      default: SignUp,
      footer: Footer
    }
  },
]
