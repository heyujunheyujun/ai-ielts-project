/**
 * 检测浏览器支持的最佳音频编码格式（供 MediaRecorder 使用）。
 * 返回质量最高的可用编码，若无匹配则返回空字符串（使用浏览器默认值）。
 *
 * 优先级：webm+opus > webm > mp4 > aac > ogg
 * - Chrome / Android → audio/webm;codecs=opus
 * - iOS Safari       → audio/mp4（不支持 webm）
 * - Firefox          → audio/ogg;codecs=opus
 */
export function getSupportedAudioMimeType(): string {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/mp4',
    'audio/aac',
    'audio/ogg;codecs=opus',
    'audio/ogg'
  ]
  for (const t of types) {
    if (MediaRecorder.isTypeSupported(t)) return t
  }
  return ''
}

/**
 * 将 getUserMedia / MediaRecorder 的 DOMException 转为对用户友好的中文提示。
 */
export function getRecordingErrorMessage(err: any): string {
  if (err?.name === 'NotAllowedError') {
    return '麦克风权限被拒绝，请在浏览器设置中允许访问麦克风。'
  }
  if (err?.name === 'NotFoundError') {
    return '未检测到麦克风设备。'
  }
  if (err?.name === 'NotReadableError') {
    return '麦克风正被其他应用占用。'
  }
  return '录制失败：' + (err?.message || '未知错误')
}
