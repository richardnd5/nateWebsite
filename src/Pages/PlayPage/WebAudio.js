import WAAClock from 'waaclock'
import webAudioTouchUnlock from 'web-audio-touch-unlock'
import Tone from 'tone'

// To start Web Audio
export const context = new (window.AudioContext || window.webkitAudioContext)();
webAudioTouchUnlock(context)

export let sequencer = new WAAClock(context, { toleranceEarly: 0.01 })
Tone.setContext(context);