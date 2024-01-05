import Pdf from '../pp/Ankit.pdf'
import { PDFDownloadLink } from '@react-pdf/renderer';


export default function ProjectBtn() {
  return (
    <div className="flex flex-col sm:flex-row xl:mx-0 sm:gap-x-10 gap-y-5">
      <div className=" bg-purple-700 border-2 border-purple-700 shadow-[0_0_5px_theme('colors.purple.300'),0_0_20px_theme('colors.purple.700')] h-11 w-36 sm:w-28 text-center pt-1.5 rounded-2xl text-white hover:bg-transparent">
      <PDFDownloadLink document={<Pdf />} fileName="sample.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download'
      }
    </PDFDownloadLink>  
      </div>
      {/* <div className="border-2 border-purple-700 shadow-[0_0_5px_theme('colors.purple.300'),0_0_20px_theme('colors.purple.700')] h-11 w-36 sm:w-28 text-center pt-1.5 rounded-2xl text-white hover:bg-purple-700"> 
      <button>View</button>
      </div> */}
    </div>
  );
}
