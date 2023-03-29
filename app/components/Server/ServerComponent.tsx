// SSG stategy
export async function getDataSSG() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return data
}

// SSR stategy
export async function getDataSSR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  })
  const data = await res.json()
  return data
}

// ISR stategy
export async function getDataISR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 10, //seconds to revalidate the data
    },
  })
  const data = await res.json()
  return data
}

export default async function ServerComponent() {
  const data = await getDataSSG()

  return (
    <div>
      <h2>Server Component</h2>
      <ul>
        {data?.map((user: any) => (
          <li key={user.id}>Users: {user.email}</li>
        ))}
      </ul>
      <p>Some extra data</p>
    </div>
  )
}
