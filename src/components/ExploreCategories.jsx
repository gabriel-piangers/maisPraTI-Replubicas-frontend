import {
  FaHome,
  FaBuilding,
  FaBed,
  FaUsers
} from 'react-icons/fa'
import '../styles/ExploreCategories.css'

const categories = [
  {
    icon: <FaHome />,
    title: 'Casas',
    subtitle: '1k disponíveis'
  },
  {
    icon: <FaBuilding />,
    title: 'Apartamentos',
    subtitle: '1k disponíveis'
  },
  {
    icon: <FaBed />,
    title: 'Quartos',
    subtitle: '1k disponíveis'
  },
  {
    icon: <FaUsers />,
    title: 'Repúblicas',
    subtitle: '1k disponíveis'
  }
]

export function ExploreCategories() {
  return (
    <section className="explore-section">
      <div className="explore-header">
        <h1>Explore por categoria.</h1>
        <p>Tudo para o seu conforto e segurança.</p>
      </div>

      <div className="explore-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="explore-card">
            <div className="explore-icon">{cat.icon}</div>
            <h3 className="explore-title">{cat.title}</h3>
            <p className="explore-subtitle">{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}