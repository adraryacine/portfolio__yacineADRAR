import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { SectionHeader } from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const { t } = useLang()
  const [filter, setFilter] = useState('all')

  const filters = [
    { key: 'all', label: t.work.all },
    { key: 'web', label: t.work.web },
    { key: 'app', label: t.work.app },
  ]

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader kicker={t.work.kicker} title={t.work.title} subtitle={t.work.subtitle} />

          {/* Filtres */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-gold text-ink'
                    : 'border border-stone text-muted hover:border-gold hover:text-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
