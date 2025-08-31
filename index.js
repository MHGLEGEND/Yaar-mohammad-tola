import Link from 'next/link'; import {getNamazTimes} from '../lib/namaz';
export default function Home(){const t=getNamazTimes();return(<main style={{padding:20,fontFamily:'Arial'}}>
<h1>Yaar Mohammad Tola</h1><p>One family, many generations — preserving history, faith, and connection.</p>
<h2>Today's Namaz (sample)</h2><ul><li>Fajr: {t.fajr}</li><li>Dhuhr: {t.dhuhr}</li><li>Asr: {t.asr}</li><li>Maghrib: {t.maghrib}</li><li>Isha: {t.isha}</li></ul>
<p><Link href="/family">Family</Link> · <Link href="/mosques">Mosques</Link> · <Link href="/admin">Admin</Link></p>
<p>Location: Yaar Mohammad Tola, Jamnagar 816108</p></main>);}
