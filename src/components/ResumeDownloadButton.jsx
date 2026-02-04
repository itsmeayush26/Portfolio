import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ResumeDownloadButton = () => {
  const [downloading, setDownloading] = useState(false);

  const resumeFile = "/ayushcv02.pdf"; // Place PDF inside public folder

  const handleDownload = () => {
    setDownloading(true);

    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Ayush_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {downloading ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-5" alt="copy Icon" />
            Resume Downloaded!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy icon" />
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ResumeDownloadButton;
