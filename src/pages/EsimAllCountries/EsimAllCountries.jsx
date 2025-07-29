import AllEsimCountries from '../../components/AllEsimCountries/AllEsimCountries';
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import PopularCountries from '../../components/popularCountries/popularCountries';

const EsimAllCountries = () => {
    const title = [
        { text: " International", className: "orange-text" },
        { text: " eSIM Plans", className: "" },
      ];
      
      const features1 = [
        { icon1: "fas fa-infinity", text: "Unlimited Plans" },
        { icon1: "fas fa-wifi", text: "Fast 5G/4G Data" },
        { icon1: "fab fa-apple", text: "iPhone", icon2: "fab fa-android", text2: "Android" },
      ];
      
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <HeaderSection
            title={title}
            heading="Compatible with"
            description="Get fast 4G/5G international roaming data and the best coverage in 200+ countries with our eSIM plans for international travel."
            features1={features1}
            buttons={["IOS", "Android"]}
            backgroundColor="#1e293b"
        />
        
        <div className="container mx-auto px-4 py-8">
            <PopularCountries/>
        </div>
        
        <div className="bg-white">
            <AllEsimCountries/>
        </div>
    </div>
  )
}

export default EsimAllCountries