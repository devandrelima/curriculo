import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { detectedAssets } from 'virtual:detected-assets'
import { assetUrl } from '@/lib/utils'

/**
 * Folha A4 exclusiva para impressão.
 *
 * Usa os MESMOS dados do currículo interativo, sem duplicar informações.
 * Quando não houver foto em public/images/, utiliza as iniciais AA.
 * A tela interativa permanece intacta.
 */
export function PrintResume() {
  const { resolve, resolveArray } = useTranslation()
  const { personal, contact, skills, experiences, projects, education, labels } = resumeConfig
  const photo = personal.photo || detectedAssets.photo
  const years = (period: string) => period.replace(' (previsão)', '')

  return (
    <article className="cv-print" aria-label="Currículo em formato A4">
      <header className="cv-print__header">
        <div className="cv-print__avatar">
          {photo ? (
            <img src={assetUrl(photo)} alt={`Foto de ${personal.name}`} />
          ) : (
            <span aria-label="Iniciais do candidato">AA</span>
          )}
        </div>
        <div className="cv-print__identity">
          <h1>{personal.name}</h1>
          <p className="cv-print__role">{resolve(personal.title)}</p>
          {personal.subtitle && <p className="cv-print__subtitle">{resolve(personal.subtitle)}</p>}
        </div>
      </header>

      <div className="cv-print__columns">
        <aside className="cv-print__side">
          <section className="cv-print__section">
            <h2>{resolve(labels.sections.contact)}</h2>
            <ul className="cv-print__contact">
              {contact.map((item, index) => {
                const href = item.href || (
                  item.type === 'email' ? `mailto:${item.label}` :
                  item.type === 'phone' ? `tel:${item.label.replace(/[^+0-9]/g, '')}` : undefined
                )
                return (
                  <li key={index}>
                    {href ? <a href={href}>{item.label}</a> : <span>{item.label}</span>}
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="cv-print__section">
            <h2>{resolve(labels.sections.skills)}</h2>
            {skills.map((group, index) => (
              <div className="cv-print__skill-group" key={index}>
                <h3>{resolve(group.title)}</h3>
                <p>{group.items.map(item => {
                  const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                  return item.level ? `${name} · ${resolve(item.level)}` : name
                }).join(' · ')}</p>
              </div>
            ))}
          </section>

          <section className="cv-print__section">
            <h2>{resolve(labels.sections.education)}</h2>
            {education.map((school, index) => (
              <div className="cv-print__education" key={index}>
                <h3>{resolve(school.degree)}</h3>
                <p>{resolve(school.school)}</p>
                {school.specialty && <p>{resolve(school.specialty)}</p>}
                {school.period && <p>{years(school.period)}</p>}
              </div>
            ))}
          </section>

          <section className="cv-print__section cv-print__about">
            <h2>{resolve({ pt: 'SOBRE', en: 'PROFILE' })}</h2>
            <p>{resolve({
              pt: 'Experiência em Data & AI, construção de sistemas e automações. Desenvolvo projetos com agentes de IA, validação técnica e testes.',
              en: 'Experience in Data & AI, software delivery and automation. I build projects using AI agents, technical validation and tests.',
            })}</p>
          </section>
        </aside>

        <main className="cv-print__main">
          <section className="cv-print__section">
            <h2>{resolve(labels.sections.experience)}</h2>
            {experiences.map(exp => (
              <div className="cv-print__experience" key={exp.id}>
                <div className="cv-print__item-header">
                  <h3>{resolve(exp.company)}</h3>
                  <span>{resolve(exp.period)}</span>
                </div>
                <p className="cv-print__position">{resolve(exp.role)}{exp.type ? ` · ${resolve(exp.type)}` : ""}</p>
                <p>{resolve(exp.description)}</p>
                {exp.details?.tasks && (
                  <ul className="cv-print__tasks">
                    {resolveArray(exp.details.tasks).map((task, index) => <li key={index}>{task}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </section>

          {projects && projects.length > 0 && labels.sections.projects && (
            <section className="cv-print__section">
              <h2>{resolve(labels.sections.projects)}</h2>
              {projects.map(project => (
                <div className="cv-print__project" key={project.id}>
                  <div className="cv-print__item-header">
                    <h3>{resolve(project.title)}</h3>
                    {project.github && (
                      <a href={project.github} aria-label={`Código de ${resolve(project.title)}`}>
                        GitHub
                      </a>
                    )}
                  </div>
                  <p>{resolve(project.description)}</p>
                  <p className="cv-print__techs">{project.techs.join(' · ')}</p>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </article>
  )
}
