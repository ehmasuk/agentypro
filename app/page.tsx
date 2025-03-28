function Homepage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* hero section */}
      <section className="relative pt-24 md:pt-28 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-[0.2]" />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="lg:w-1/2 z-10">
              <div className="flex items-center mb-6">
                <div
                  className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full"
                  data-v0-t="badge"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles h-3.5 w-3.5 mr-1.5 text-blue-600"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  AI-Powered Business Platform
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Transform Your Business Communication
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
                Harness the power of AI to automate customer engagement, streamline sales processes, and revolutionize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center">
                  Get Started Free{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button className="gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-blue-600 border-blue-200 dark:border-blue-900 dark:text-blue-400 font-semibold rounded-lg transition-all flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play mr-2 h-5 w-5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>{" "}
                  Watch Demo
                </button>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 1"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=29"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 2"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=56"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 3"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=52"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 4"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=7"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">4.9/5</span> from <span className="font-semibold">2,000+</span> reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 z-10 hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full -z-10 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400/20 rounded-full -z-10 blur-2xl" />
                <div className="relative">
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600" />
                    <div className="p-1">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                          <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">AgentyPro AI Dashboard</div>
                        </div>
                        <div className="relative">
                          <img
                            alt="AgentyPro Dashboard"
                            loading="lazy"
                            width={800}
                            height={600}
                            decoding="async"
                            data-nimg={1}
                            className="w-full h-auto"
                            src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600"
                            style={{ color: "transparent" }}
                          />
                          <div className="absolute bottom-4 left-4 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="p-3 bg-blue-600 text-white flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-bot h-5 w-5 mr-2"
                              >
                                <path d="M12 8V4H8" />
                                <rect width={16} height={12} x={4} y={8} rx={2} />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                              </svg>
                              <span className="text-sm font-medium">AI Assistant</span>
                            </div>
                            <div className="p-3 max-h-32 overflow-y-auto text-sm">
                              <div className="flex items-start mb-2">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-bot h-3 w-3 text-blue-600"
                                  >
                                    <path d="M12 8V4H8" />
                                    <rect width={16} height={12} x={4} y={8} rx={2} />
                                    <path d="M2 14h2" />
                                    <path d="M20 14h2" />
                                    <path d="M15 13v2" />
                                    <path d="M9 13v2" />
                                  </svg>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-gray-800 dark:text-gray-200">How can I help you today?</div>
                              </div>
                              <div className="flex items-start justify-end">
                                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2 text-gray-800 dark:text-gray-200">I need to set up automated responses</div>
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center ml-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-user h-3 w-3 text-gray-600"
                                  >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-4 left-4 max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3 flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-circle-check-big h-4 w-4 text-green-600"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <path d="m9 11 3 3L22 4" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">New lead captured</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">AI assistant has qualified a new lead</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-3 transform rotate-6 z-20">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Conversion Rate</div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">+27%</div>
                    <div className="w-full h-24">
                      <div className="w-full h-full flex items-end justify-between">
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "35%" }} />
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "45%" }} />
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "30%" }} />
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "60%" }} />
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "75%" }} />
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "50%" }} />
                        <div className="w-[8%] bg-blue-500 dark:bg-blue-600 rounded-t-sm" style={{ height: "65%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-3 transform -rotate-6 z-20">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-message-square h-4 w-4 text-blue-600"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium text-gray-800 dark:text-gray-200">WhatsApp</div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">AI has responded to 24 customer inquiries in the last hour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-[0.15]" />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full mb-4"
              data-v0-t="badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brain-circuit h-3.5 w-3.5 mr-1.5 text-blue-600"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                <path d="M12 13h4" />
                <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                <path d="M12 8h8" />
                <path d="M16 8V5a2 2 0 0 1 2-2" />
                <circle cx={16} cy={13} r=".5" />
                <circle cx={18} cy={3} r=".5" />
                <circle cx={20} cy={21} r=".5" />
                <circle cx={20} cy={8} r=".5" />
              </svg>
              AI Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Advanced AI Technology</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Our platform leverages cutting-edge artificial intelligence to deliver intelligent automation and insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Understand customer inquiries in natural language</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Sentiment analysis</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Intent recognition</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bot h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path d="M12 8V4H8" />
                  <rect width={16} height={12} x={4} y={8} rx={2} />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conversational AI</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Engage customers with human-like conversations</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Voice and text capabilities</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Contextual memory</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Personality customization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bar-chart3 h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Leverage machine learning to predict customer behavior</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Customer behavior insights</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Sales forecasting</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Trend identification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full mb-4"
              data-v0-t="badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap h-3.5 w-3.5 mr-1.5 text-blue-600"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All-in-One Business Solution</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">AgentyPro combines multiple tools into a single platform to streamline your business operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users h-10 w-10 text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrated CRM</h3>
              <p className="text-gray-600 dark:text-gray-400">Manage all your customer relationships in one place with detailed insights and automated follow-ups</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bar-chart3 h-10 w-10 text-blue-600"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sales Funnels</h3>
              <p className="text-gray-600 dark:text-gray-400">Create and optimize sales funnels to convert leads into customers efficiently with AI-powered optimization</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-database h-10 w-10 text-blue-600"
                >
                  <ellipse cx={12} cy={5} rx={9} ry={3} />
                  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                  <path d="M3 12A9 3 0 0 0 21 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Management</h3>
              <p className="text-gray-600 dark:text-gray-400">Capture, track, and nurture leads through your sales pipeline with intelligent automation and scoring</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-credit-card h-10 w-10 text-blue-600"
                >
                  <rect width={20} height={14} x={2} y={5} rx={2} />
                  <line x1={2} x2={22} y1={10} y2={10} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Subscription Billing</h3>
              <p className="text-gray-600 dark:text-gray-400">Manage recurring payments and subscriptions with flexible billing options and automated invoicing</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layers h-10 w-10 text-blue-600"
                >
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Task Automation</h3>
              <p className="text-gray-600 dark:text-gray-400">Automate repetitive tasks and workflows to save time and reduce errors with customizable triggers</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-10 w-10 text-blue-600"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security &amp; Compliance</h3>
              <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security with data encryption and compliance features for regulated industries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full mb-4"
              data-v0-t="badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cpu h-3.5 w-3.5 mr-1.5 text-blue-600"
              >
                <rect width={16} height={16} x={4} y={4} rx={2} />
                <rect width={6} height={6} x={9} y={9} rx={1} />
                <path d="M15 2v2" />
                <path d="M15 20v2" />
                <path d="M2 15h2" />
                <path d="M2 9h2" />
                <path d="M20 15h2" />
                <path d="M20 9h2" />
                <path d="M9 2v2" />
                <path d="M9 20v2" />
              </svg>
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How AgentyPro Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get up and running in minutes with our simple setup process</p>
          </div>
          <div className="relative">
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-120px)] bg-gradient-to-b from-blue-600 to-blue-400 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-5 bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Connect Your Channels</h3>
                <p className="text-gray-600 dark:text-gray-300">Integrate your business communication channels like WhatsApp, email, and voice</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-5 bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Set Up Automations</h3>
                <p className="text-gray-600 dark:text-gray-300">Create custom workflows and responses for different customer scenarios</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md relative">
                <div className="absolute -top-5 -left-5 bg-blue-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 mt-4">Grow Your Business</h3>
                <p className="text-gray-600 dark:text-gray-300">Monitor performance, optimize processes, and scale your operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full mb-4"
              data-v0-t="badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe h-3.5 w-3.5 mr-1.5 text-blue-600"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See AgentyPro in Action</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Discover how businesses are transforming with our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-all" data-v0-t="card">
              <div className="relative h-48">
                <img
                  alt="Case Study 1"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover"
                  src="https://picsum.photos/500/300?random=Case Study 1"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </div>
              <div className="p-6">
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300"
                  data-v0-t="badge"
                >
                  E-commerce
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Retail Increases Sales by 40%</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">How a leading retail brand automated customer service and boosted conversion </p>
                <a href="/case-studies/1" className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                  Read Case Study{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-1 h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-all" data-v0-t="card">
              <div className="relative h-48">
                <img
                  alt="Case Study 2"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover"
                  src="https://picsum.photos/500/300?random=Case Study 2"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </div>
              <div className="p-6">
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300"
                  data-v0-t="badge"
                >
                  SaaS
                </div>
                <h3 className="text-xl font-semibold mb-2">Tech Startup Reduces Support Costs by 60%</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">How an emerging SaaS company automated customer support and improved satisfaction.</p>
                <a href="/case-studies/2" className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                  Read Case Study{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-1 h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-all" data-v0-t="card">
              <div className="relative h-48">
                <img
                  alt="Case Study 3"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover"
                  src="https://picsum.photos/500/300?random=Case Study 3"
                  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
                />
              </div>
              <div className="p-6">
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300"
                  data-v0-t="badge"
                >
                  Healthcare
                </div>
                <h3 className="text-xl font-semibold mb-2">Healthcare Provider Improves Patient Engagement</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">How a healthcare network automated appointment scheduling and follow-ups.</p>
                <a href="/case-studies/3" className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                  Read Case Study{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-1 h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-6">
              View All Case Studies{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-2 h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full mb-4"
              data-v0-t="badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users h-3.5 w-3.5 mr-1.5 text-blue-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Businesses of all sizes trust AgentyPro to power their customer communications</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all relative">
              <div className="absolute top-4 right-4 text-blue-100 dark:text-blue-900/30">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex mb-4">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                AgentyPro has transformed how we handle customer inquiries. Our response time has decreased by 80% 
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    alt="Sarah Johnson"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-full border-2 border-blue-100 dark:border-blue-900/30"
                    src="https://i.pravatar.cc/150?img=SJ"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">TechSolutions Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all relative">
              <div className="absolute top-4 right-4 text-blue-100 dark:text-blue-900/30">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex mb-4">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="halfStar4">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="#D1D5DB" className="dark:stop-color-gray-600" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#halfStar4)"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">The WhatsApp automation feature alone has saved us 20 hours per week. The ROI on this platform is incredible.</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    alt="Michael Chen"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-full border-2 border-blue-100 dark:border-blue-900/30"
                    src="https://i.pravatar.cc/150?img=MC"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Global Retail</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all relative">
              <div className="absolute top-4 right-4 text-blue-100 dark:text-blue-900/30">
                <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex mb-4">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">We've seen a 40% increase in lead conversion since implementing AgentyPro's sales funnel automation.</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    alt="Jessica Williams"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-full border-2 border-blue-100 dark:border-blue-900/30"
                    src="https://i.pravatar.cc/150?img=JW"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <p className="font-semibold">Jessica Williams</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Marketing Experts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-blue-50 max-w-5xl mx-auto dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Join 2,000+ satisfied customers</h3>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-xl font-bold">4.9/5</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">(500+ reviews)</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-32 text-sm text-gray-600 dark:text-gray-400">Ease of Use</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: "95%" }} />
                    </div>
                    <span className="ml-2 text-sm font-medium">4.8/5</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32 text-sm text-gray-600 dark:text-gray-400">Customer Support</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: "98%" }} />
                    </div>
                    <span className="ml-2 text-sm font-medium">4.9/5</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-32 text-sm text-gray-600 dark:text-gray-400">Value for Money</span>
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: "92%" }} />
                    </div>
                    <span className="ml-2 text-sm font-medium">4.6/5</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col items-center">
                <div className="flex -space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 1"
                      loading="lazy"
                      width={48}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=1"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 2"
                      loading="lazy"
                      width={48}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=2"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 3"
                      loading="lazy"
                      width={48}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=3"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 4"
                      loading="lazy"
                      width={48}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=4"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 5"
                      loading="lazy"
                      width={48}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=5"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img
                      alt="User 6"
                      loading="lazy"
                      width={48}
                      height={48}
                      decoding="async"
                      data-nimg={1}
                      className="object-cover"
                      src="https://i.pravatar.cc/150?img=6"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 bg-blue-600 flex items-center justify-center text-white font-medium text-sm">+1.9k</div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                  Read Success Stories{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-3 py-1 text-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-400 rounded-full mb-4"
              data-v0-t="badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card h-3.5 w-3.5 mr-1.5 text-blue-600"
              >
                <rect width={20} height={14} x={2} y={5} rx={2} />
                <line x1={2} x2={22} y1={10} y2={10} />
              </svg>
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Choose the plan that fits your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 relative">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Perfect for small businesses just getting started</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Voice AI Assistant</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">WhatsApp Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Basic CRM Features</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">5 User Accounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Email Support</span>
                  </li>
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 w-full py-3 px-4 rounded-lg font-semibold transition-colors bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-blue-500 ring-2 ring-blue-500 ring-opacity-50 relative">
              <div className="bg-blue-500 text-white text-xs font-semibold py-1 px-3 absolute top-0 right-0 rounded-bl-lg">MOST POPULAR</div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Ideal for growing businesses with more demands</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Starter</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Advanced Automation</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Sales Funnel Builder</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">15 User Accounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Priority Support</span>
                  </li>
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 w-full py-3 px-4 rounded-lg font-semibold transition-colors bg-blue-600 hover:bg-blue-700 text-white">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 relative">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For large organizations with specific requirements</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Custom Integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Unlimited Users</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check-big h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">24/7 Premium Support</span>
                  </li>
                </ul>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 w-full py-3 px-4 rounded-lg font-semibold transition-colors bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=20&width=20')] opacity-[0.05]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Join thousands of businesses already using AgentyPro to automate their communication and boost sales</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg">
              Get Started Free
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-11 px-8 bg-transparent hover:bg-blue-700 text-white border border-white font-semibold rounded-lg">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-12 pt-12 border-t border-blue-500/30 text-blue-100 max-w-4xl mx-auto">
            <p className="text-lg mb-6">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square h-5 w-5 text-white"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span>Chat with us</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone h-5 w-5 text-white"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>Call us at (123) 456-7890</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe h-5 w-5 text-white"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <span>Visit our help center</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
