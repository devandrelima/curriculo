import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'

/** Imprime a versão A4 usando o navegador, sem serviço externo. */
export function PdfDownload() {
  const { resolve } = useTranslation()
  return (
    <button type="button" onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium cursor-pointer">
      <DownloadIcon className="w-4 h-4" />
      {resolve(resumeConfig.labels.actions.downloadPdf ?? { pt: 'Salvar em PDF', en: 'Save as PDF' })}
    </button>
  )
}
