const Resume = () => {
  // Convert Google Drive view link to preview/download links
  const resumeViewUrl = "https://drive.google.com/file/d/1_tSH6MkF9mTViHxSMQn6MovuDNbxVKVc/preview";
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1_tSH6MkF9mTViHxSMQn6MovuDNbxVKVc";

  const handleDownload = () => {
    window.open(resumeDownloadUrl, '_blank');
  };

  const handlePreview = () => {
    window.open(resumeViewUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            View or download my professional resume
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resume Preview */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Resume Preview
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src={resumeViewUrl}
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded-lg"
                title="Resume Preview"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handlePreview}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Full Resume
              </button>
              <button 
                onClick={handleDownload}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Experience
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    MERN Stack Developer
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    2022 - Present
                  </p>
                  <ul className="mt-3 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Developed scalable web applications using MERN stack</li>
                    <li>• Built RESTful APIs and integrated third-party services</li>
                    <li>• Implemented responsive designs and user interfaces</li>
                    <li>• Collaborated with cross-functional teams</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    2021 - 2022
                  </p>
                  <ul className="mt-3 text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Created interactive user interfaces with React.js</li>
                    <li>• Optimized applications for performance and SEO</li>
                    <li>• Worked with design teams to implement UI/UX</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor's in Computer Science
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  2018 - 2022
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Focused on web development, data structures, algorithms, and software engineering principles.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Full Stack Web Development
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    React.js Development
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Node.js & Express.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
