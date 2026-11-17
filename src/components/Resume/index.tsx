import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { PdfDownload } from './PdfDownload'
import { PrintResume } from './PrintResume'

export function Resume() {
  const { resolve } = useTranslation()
  return (
    <>
    <div className="resume-page w-full max-w-4xl mx-auto px-4 py-8">
      <div className="resume-actions flex items-center justify-between mb-4">
        <PdfDownload />
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle label={resolve(resumeConfig.labels.actions.switchTheme)} />
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="resume-card bg-resume-bg-card rounded-xl shadow-2xl overflow-hidden dark:border dark:border-resume-primary/10">
        <div className="resume-columns flex flex-col-reverse md:flex-row">
          <Sidebar />
          <MainContent />
        </div>
      </motion.div>
      <p className="resume-hint text-center text-sm text-resume-text-secondary mt-6">
        {resolve(resumeConfig.labels.actions.clickHint)}
      </p>
    </div>
    <PrintResume />
    </>
  )
}
