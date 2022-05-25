
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import Link from '../node_modules/next/link'

const About = () => {
  return (
    <>
      <h1>About</h1>
      
      <h1 className={'title'}>
        Ir a <Link  href="/">Home</Link>
      </h1>

      <p className={'description'}> 
        Get started by editing{' '}
        <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

export default About

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
} 