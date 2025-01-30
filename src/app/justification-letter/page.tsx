import JustificationLetterPDF from "@/components/justification-letter-pdf";

export default function JustificationLetter() {
  return (
    <main className="bg-gray-900 text-white pb-6">
      <h1 className="bg-gray-900 p-4 sm:p-8 text-2xl font-bold">Conference Attendance Justification Letter</h1>
      <JustificationLetterPDF />
    </main>
  )
}
