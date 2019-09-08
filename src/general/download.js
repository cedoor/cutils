/**
 * Download a file with the the text passed as parameter.
 * @param filename
 * @param content
 * @param contentType
 */
export function download (filename, content, contentType = 'text/json') {
  const element = document.createElement('a')
  const blob = new window.Blob([content], { type: contentType })

  element.href = window.URL.createObjectURL(blob)
  element.download = filename
  element.dataset.downloadurl = [contentType, element.download, element.href].join(':')
  element.style.display = 'none'

  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
