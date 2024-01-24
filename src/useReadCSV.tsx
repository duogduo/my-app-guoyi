 
 import Papa, { ParseResult } from "papaparse"

 type Data = {
  name: string
  family: string
  email: string
  date: string
  job: string
}

type Values = {
  data: Data[]
}

  const getCSV = () => {
    Papa.parse("/file.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        // setValues(results)
      },
    })
  }

// export default useReadCSV;