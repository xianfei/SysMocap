const cleanFlag = flag => flag.substr(flag[1] === "-" ? 2 : 1)
const tryParse = value => {
  const number = Number.parseFloat(value)

  if (!isNaN(number)) {
    return number
  }

  const lowerValue = value.toLowerCase()
  if (lowerValue === "true") {
    return true
  }

  if (lowerValue === "false") {
    return false
  }

  return value
}

module.exports = input => {
  if (typeof input === "string") {
    input = ["", "", ...input.split(" ").filter(e => e)]
  }
  input = input.reduce((acc, e) => {
    if (e !== "=") {
      if (e.includes("=")) {
        acc.push(...e.split("="))
      } else {
        acc.push(e)
      }
    }
    return acc
  }, [])

  input = input.reduce((acc, e) => {
    if (e.length > 2 && e[0] === "-" && e[1] !== "-" && isNaN(Number.parseFloat(e))) {
      e.substr(1, e.length - 1).split("").forEach(e => {
        acc.push(`-${e}`, "true")
      })
    } else {
      acc.push(e)
    }

    return acc
  }, [])

  const argv = { _: [] }

  for (let i = 1; i < input.length; i++) {
    const e = input[i]
    if (e[0] !== "-" || !isNaN(Number.parseFloat(e))) {
      const prevE = input[i - 1]
      if (prevE[0] === "-") {
        argv[cleanFlag(prevE)] = tryParse(e)
      } else {
        argv._.push(tryParse(e))
      }
    } else {
      const index = e.indexOf("=")
      if (index === -1) {
        const cleanE = cleanFlag(e)
        cleanE.substr(0, 3).toLowerCase() !== "no-" ? argv[cleanE] = true : argv[cleanE.substr(3, cleanE.length)] = false
      } else {
        const key = e.substr(0, index)
        input[i] = key
        argv[cleanFlag(key)] = null
        input.splice(i + 1, 0, e.substr(index + 1, e.length))
      }
    }
  }

  return argv
}
