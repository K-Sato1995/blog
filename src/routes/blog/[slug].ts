import post from './__data.json'

export async function get({ params }) {
  const { id } = params
  console.log(id)

  console.log(post)
  if (post) {
    return {
      body: { post }
    };
  }
 
  return {
    status: 404
  };
}
