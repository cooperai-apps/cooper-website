export function scrollToSection(e: React.MouseEvent, sectionId: string) {
  e.preventDefault()
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
}
