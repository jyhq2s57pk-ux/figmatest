import { HeroCampaign } from './components/HeroCampaign/HeroCampaign'
import { CTAButton } from './components/CTAButton/CTAButton'
import { LinkCard } from './components/LinkCard/LinkCard'
import { Carousel } from './components/Carousel/Carousel'
import './App.css'

const ASSET_LISTEN_ICON = "http://localhost:3845/assets/9796a8b7c53d5ede6fe6f99b8586cd72cd57f488.svg";

function App() {
  return (
    <div className="app-container">
      <div className="component-showcase">
        <section>
          <h2>Hero Campaign</h2>
          <HeroCampaign />
        </section>

        <section>
          <h2>Carousel</h2>
          <Carousel />
        </section>

        <section className="row-section">
          <div className="col-section">
            <h2>CTA Buttons</h2>
            <div className="row">
              <CTAButton text="Download" icon={ASSET_LISTEN_ICON} color="light" size="sml" />
              <CTAButton text="Download" icon={ASSET_LISTEN_ICON} color="dark" size="sml" />
            </div>
            <div className="row">
              <CTAButton text="Download" icon={ASSET_LISTEN_ICON} color="light" size="med" />
              <CTAButton text="Download" icon={ASSET_LISTEN_ICON} color="dark" size="med" />
            </div>
            <div className="row">
              <CTAButton text="Download" icon={ASSET_LISTEN_ICON} color="light" size="lrg" />
              <CTAButton text="Download" icon={ASSET_LISTEN_ICON} color="dark" size="lrg" />
            </div>
          </div>

          <div className="col-section">
            <h2>Link Cards</h2>
            <LinkCard
              title="Title"
              description="Optional description text."
              variant="desktop"
            />
            <div style={{ marginTop: '20px' }}>
              <LinkCard
                title="Customer journey"
                variant="mobile"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
