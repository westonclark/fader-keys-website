import { Layout } from "../components/layout"

export default function Dashboard() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Fader Keys Dashboard</h1>
        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Fader Keys License</h2>
          <p className="mb-4">Thank you for purchasing Fader Keys! Your license is active and ready to use.</p>
          <h3 className="text-xl font-semibold mb-2">Download Instructions</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the download button below to get the latest version of Fader Keys.</li>
            <li>Once downloaded, unzip the file.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Launch Fader Keys and enter your license key when prompted.</li>
          </ol>
          <button className="mt-6 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
            Download Fader Keys
          </button>
        </div>
      </div>
    </Layout>
  )
}
