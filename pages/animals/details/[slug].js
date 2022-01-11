import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function AnimalDetails() {
  const router = useRouter()
  const { slug } = router.query

  return(
    <Layout>
      <h1>Miejsce na szczegóły słodziaka o ID: {slug}</h1>

      <p>dodać też przycisk powrotu do strony głównej</p>
    </Layout>
  );
}