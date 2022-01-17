import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function AboutUs() {
  const router = useRouter()
  const { slug } = router.query

  return(
    <Layout>
      <h1>MIEJSCE NA SUPER DESIGN</h1>
    </Layout>
  );
}