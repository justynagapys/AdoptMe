import Layout from '../../components/Layout'
import GetAnimals from '../../components/GetAnimals'
import { useRouter } from 'next/router'

export default function Animal() {
  const router = useRouter()
  const { slug } = router.query

  return(
    <Layout>
      <h1>{slug}</h1>
      <GetAnimals animalType={slug}/>
    </Layout>
  );
}