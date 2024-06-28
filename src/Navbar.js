import React from 'react';

const Navbar = ({ sections }) => {
  return (
    <nav className="navbar transparent">
      <ul className="nav-list">
        {sections.map((section) => (
          <li key={section.id} className="nav-item">
            <a href={`#${section.id}`} className="nav-link">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
