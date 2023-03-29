import ClientComponent from "../components/ClientComponent"
import ServerComponent from "../components/Server/ServerComponent"

export default function AboutPage() {
  return (
    <main>
      <h1>Components Page</h1>
      <ServerComponent />
      <br />
      <ClientComponent />
    </main>
  )
}
