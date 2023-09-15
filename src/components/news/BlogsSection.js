
const Blogs = [
  
  {
    image : "https://images.unsplash.com/photo-1599658880436-c61792e70672",
    title : "STOCK MARKET WATCH ",
    description: "LET US HELP YOU ALSO WATCH YOUR STOCK MARKET GROWTH",
    create : "2023"
  },
  // {
  //   image : "https://immo2.pro/images/wp-images/2016/01/strategie-linkedin-immobilier.jpg",
  //      title : "LOREM IPSUM LOREM IPSUM",
  //   description: "C’est la conviction que les outils numériques d’aujourd’hui peuvent profiter à tous si on les utilise de la bonne manière. Tanit Digital, notre société de communication digitale des entreprises en Tunisie......",
  //   create : "May 20th 2020"
  // },
  {
    image : "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title : "DIGITAL ADVERT",
    description: "It is the belief that today's digital tools can benefit everyone if used correctly. Guarantyresources, our digital communication company for businesses in Nigeria......",
    // create : "2023"
  },
  // {
  //   image : "https://www.tanit-digital.com/wp-content/uploads/2021/06/Recette-digitale-2021-uai-1440x961.jpeg",
  //   title : "LOREM IPSUM LOREM IPSUM",
  //   description: "C’est la conviction que les outils numériques d’aujourd’hui peuvent profiter à tous si on les utilise de la bonne manière. Tanit Digital, notre société de communication digitale des entreprises en Tunisie....",
  //   create : "May 20th 2020"
  // },
  {
    image : "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title : "AFFILIATE MARKETING",
    description: " Unlock the potential of affiliate marketing with our business solutions. Harness the power of partnerships to drive revenue, expand your reach, and maximize your brand's online presence. Join us and thrive in the world of performance-based marketing.",
    // create : "2023"
  },
  //   {
  //     image : "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     title : "LOREM IPSUM LOREM IPSUM",
  //     description: "C’est la conviction que les outils numériques d’aujourd’hui peuvent profiter à tous si on les utilise de la bonne manière. Tanit Digital, notre société de communication digitale des entreprises en Tunisie..",
  //     create : "May 20th 2020"
  //   },
    {
      image : "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title : "BUSINESS CONSULTATION",
      description: "Get comprehensive business support across all aspects of your operations. From strategic planning to marketing, finance to operations, our team is here to guide and assist you every step of the way for seamless business growth and success",
      create : "2023"
    },
  //   {
  //     image : "https://images.unsplash.com/photo-1599658880436-c61792e70672",
  //     title : "LOREM IPSUM LOREM IPSUM ",
  //     description: "ée à la Covid-19 n’a épargné aucun secteur...",
  //     create : "May 20th 2020"
  //   },
  
  
]
function BlogsSection() {
    return (
        <div>
           
<main class="py-12 md:px-20 sm:px-14 px-6">
  <div class="sm:flex items-center shadow-md">
    <div class="md:px-10 sm:px-5">
      <h1 class="text-gray-800 font-bold text-2xl my-2">SEO analysis</h1>
      <p class="text-gray-700 mb-2 md:mb-6">To understand SEO analysis, let's take a look at recent history. Do you remember telephone directories? The Yellow Pages, to be more precise. ...</p>
      <div class="flex justify-between mb-2">
        <span class="font-thin text-sm">May 20th 2020</span>
        <span class="sm:block hidden mb-2 text-gray-800 font-bold">Read More</span>
      </div>
    </div>
    <div>
      <img class="bg-cover" src="https://www.markentive.com/hubfs/agence-seo.jpg" alt="" />
    </div>
  </div>
  <div class="mt-4 grid grid-cols-4 gap-4 space-x-4">
{Blogs.map((blog) => (
  <div key={blog.name}  class="shadow-md  ">
      <img src={blog.image} alt="" />
      <div class="px-4">
        <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">{blog.title}</h1>
        <p class="text-gray-700 mb-2">{blog.description}</p>
        <div class="flex justify-between mt-4">
          <span class="font-thin text-sm">May 20th 2020</span>
          <span class="mb-2 text-gray-800 font-bold">Read More</span>
        </div>
        
      </div>
    </div>
))
}
  </div>
 
</main>
        </div>
    )
}

export default BlogsSection
