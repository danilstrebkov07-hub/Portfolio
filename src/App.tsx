import './index.css'
import { motion } from 'framer-motion'
import {
  Database,
  Mail,
  Smartphone,
  Terminal,
  ArrowRight,
  Zap,
} from 'lucide-react'

const navItems = [
  { name: 'Обо мне', href: '#about' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Навыки', href: '#skills' },
  { name: 'Контакты', href: '#contact' },
]

const aboutItems = [
  { label: 'SQL / PostgreSQL', value: 90 },
  { label: 'Python / FastAPI', value: 85 },
  { label: 'HTML / CSS', value: 80 },
  { label: 'ER-диаграммы', value: 88 },
]

const skills = [
  { name: 'PostgreSQL', level: 90 },
  { name: 'SQL', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'FastAPI', level: 80 },
  { name: 'HTML / CSS', level: 82 },
  { name: 'ER-диаграммы', level: 87 },
]

const projects = [
  {
    title: 'Сайт кафе «Ель» с системой заказов',
    description:
      'Полноценный сайт ресторана с каталогом позиций, системой онлайн-заказов и админ-панелью. Адаптивный дизайн, быстрая загрузка.',
    tags: ['HTML/CSS', 'JavaScript', 'PostgreSQL', 'Заказы'],
  },
  {
    title: 'Нормализация БД для службы такси',
    description:
      'Проектирование и нормализация реляционной базы данных: водители, заказы, маршруты, оплата. Оптимизация структуры.',
    tags: ['SQL', 'PostgreSQL', 'ER-диаграмма', 'Нормализация'],
  },
  {
    title: 'Учебные работы по SQL и ER-диаграммам',
    description:
      'Коллекция учебных проектов: SQL-запросы, ER-диаграммы, нормальные формы, оптимизация запросов.',
    tags: ['SQL', 'ER-диаграммы', 'Нормализация', 'Учебные'],
  },
]

const contacts = [
  { label: 'GitHub', href: 'https://github.com/danilstrebkov07-hub', icon: Smartphone },
  { label: 'Telegram', href: 'https://t.me/danilstrebkov07', icon: Smartphone },
  { label: 'Email', href: 'mailto:danilstrebkov07@gmail.com', icon: Mail },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      {/* Фоновые жидкие фигуры — за контентом, z-index: -1 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[80px] bg-purple-500/40"
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[80px] bg-pink-500/40"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: -5 }}
        />
        <motion.div
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-[80px] bg-indigo-500/40"
          animate={{ scale: [1, 0.9, 1], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: -10 }}
        />
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-4 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-tight"
            style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Portfolio.
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero — min-height, не height, контент не перекрывается кнопкой */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-12 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-300 border border-purple-500/30 mb-8 backdrop-blur"
            >
              <Zap className="w-3 h-3" />
              IT-специалист • Базы данных • Веб-разработка
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight"
            >
              Разработка баз данных <br />
              <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                и веб-приложений
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Проектирую базы данных и разрабатываю веб-приложения на FastAPI. Создаю надёжные и масштабируемые решения.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-medium shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all"
            >
              Смотреть проекты <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </section>

        {/* About — достаточные отступы между секциями */}
        <section id="about" className="px-10 py-24 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Обо <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>мне</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                Занимаюсь проектированием баз данных, разработкой веб-приложений и автоматизацией бизнеса. Создаю эффективные структуры данных и надёжные серверные решения.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-slate-400 leading-relaxed">
                  Основной стек: SQL, PostgreSQL, Python, FastAPI, HTML/CSS. Опыт работы с нормализацией БД, ER-диаграммами, оптимизацией запросов и интеграцией систем.
                </p>

                <div className="space-y-4">
                  {aboutItems.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="text-purple-300 font-medium">{item.value}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-indigo-500/20 rounded-2xl blur-md animate-pulse"></div>
                  <div className="relative w-64 h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur">
                    <Database className="w-24 h-24 text-purple-400/50" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-10 py-24 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Мои <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>проекты</span>
              </h2>
              <p className="text-slate-400">Проектирование, разработка и автоматизация</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ ...staggerChildren.visible }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {projects.map((proj) => (
                <motion.div
                  key={proj.title}
                  initial={cardVariants.hidden}
                  whileInView={cardVariants.visible}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="h-32 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5 flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Terminal className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{proj.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-xs border border-purple-500/30 bg-purple-500/10 text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-10 py-24 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Мои <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>навыки</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ ...staggerChildren.visible }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={cardVariants.hidden}
                  whileInView={cardVariants.visible}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs font-bold text-purple-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-10 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Контакты
              </h2>
              <p className="text-slate-400">Готов обсудить ваш проект — базы данных, веб-разработка или автоматизация.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {contacts.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium backdrop-blur hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all"
                >
                  <c.icon className="w-4 h-4 text-purple-400" />
                  <span>{c.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center">
        <p className="text-xs text-slate-500">
          © 2026 Портфолио разработчика баз данных и веб-приложений. Все права защищены.
        </p>
      </footer>
    </div>
  )
}
