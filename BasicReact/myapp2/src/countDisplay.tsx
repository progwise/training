import { useEffect } from "react"

export const CountDisplayEven = (props: any) => {

  useEffect(() => {
    console.log('Even useEffect was executed')
    return () => {
      console.log('Even useEffect clean up was executed')
    }
  })

  useEffect(() => {
    console.log('Even useEffect [] was executed')
    return () => {
      console.log('Even useEffect [] clean up was executed')
    }
  }, [])
    return (<div>Even Count should display {props.countForDisplay}</div>)
}

export const CountDisplayOdd = (props: any) => {

  useEffect(() => {
    console.log('Odd useEffect was executed')
    return () => {
      console.log('Odd useEffect clean up was executed')
    }
  })

  useEffect(() => {
    console.log('Odd useEffect [] was executed')
    return () => {
      console.log('Odd useEffect [] clean up was executed')
    }
  }, [])
    return (<div>Odd Count should display {props.countForDisplay}</div>)
}