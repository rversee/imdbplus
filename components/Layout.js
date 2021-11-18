import Head from '../components/Head'
import Navigation from '../components/Navigation'
import NavigationMobile from './NavigationMobile'
import Footer from '../components/Footer'
import styles from "../styles/Layout.module.scss"

const Layout = ({ children, locale, locales, data }) => {

  let title = "IMDBPlus";
  let description = "description for page";
  if (data && data.story) {
    if (data.story.content) {
      if (data.story.content.title) {
        title = data.story.content.title;
      } else if (data.story.name) {
        title = data.story.name;
      }
      if (data.story.content.short) {
        description = data.story.content.short;
      } else if (data.story.content.introduction){
          description = data.story.content.introduction;
      }
    }
  }
  return (
    <div className={styles.layout}>
      <Head title={title} description={description} className={styles.head} />
      <Navigation locale={locale} locales={locales} />
      <NavigationMobile locale={locale} locales={locales} />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
