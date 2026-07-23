import { Navbar, NavbarItem, NavbarSection } from '@/components/navbar'

function NavbarBar() {
  return (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/events">Events</NavbarItem>
        <NavbarItem href="/orders">Orders</NavbarItem>
      </NavbarSection>
    </Navbar>
  )
}