import React from "react";

interface BlogProps {
  id: number;
  date: string;
  title: string;
  author: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const blogs: BlogProps[] = [
    {
      id: 1,
      date: "25 NOVEMBER, 2024",
      title: "LATEST RECIPES JUST IN!",
      author: "BY John Doggett",
      imageUrl: "/blogs/blog1.png",
    },
    {
      id: 2,
      date: "2 NOVEMBER, 2024",
      title: "NEW RECRUITS HAVE ARRIVED!",
      author: "BY Jeffrey Spender",
      imageUrl: "/blogs/blog2.png",
    },
    {
      id: 3,
      date: "4 NOVEMBER, 2024",
      title: "BAKING TIPS FROM THE PROS",
      author: "BY Monica Reyes",
      imageUrl: "/blogs/blog3.png",
    },
    {
      id: 4,
      date: "12 NOVEMBER, 2024",
      title: "ALL YOUR EGGS BELONG TO US",
      author: "BY John Doggett",
      imageUrl: "/blogs/blog4.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url("/images/background-3.jpg")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cursive text-white mb-8 font-bold italic">Our Blog</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex">
                {/* Image Section */}
                <div className="w-1/2">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-1/2 p-6 bg-white">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-4 text-green-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{post.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Blog Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors duration-300">
            VIEW THE BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
