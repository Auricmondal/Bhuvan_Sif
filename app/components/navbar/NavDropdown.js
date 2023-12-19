import React from 'react'
import NavDropWrapper from './NavDropWrapper'
import NavDropSection from './NavDropSection'

const NavDropdown = () => {
  return (
    <NavDropWrapper>
      <NavDropSection
        label={'Featured'}
        linkLists={['Maps','Weather','Data Archives','Bhoonidhi Vista']}
        
      />
      <NavDropSection
        label={'Professional'}
        linkLists={['Application Sector','Bhuvan Collaborator','NRSC']}
      />
      <NavDropSection
        label={'Maps & OGC Services'}
        linkLists={['Thematic Services','Ocean Services','Disaster Management','Create Map']}
      />
      <NavDropSection
        label={'Basic Needs'}
        linkLists={['Find Aadhaar Center','Housing For All','Explore']}
      />
    </NavDropWrapper>
  )
}

export default NavDropdown