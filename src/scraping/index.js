/**
 * Return the HTML of a website.
 * @param url
 * @returns {Promise<string>}
 */
function getHTML (url) {
  return new Promise(function (resolve, reject) {
    const http = new XMLHttpRequest()

    http.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText)
        } else {
          reject(this.responseText)
        }
      }
    }

    http.onerror = reject

    http.open('GET', `https://cors.cedoor.org/${url}`, true)
    http.send()
  })
}

export default {
  getHTML
}
