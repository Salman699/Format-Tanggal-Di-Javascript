# Format-Tanggal-Di-Javascript

expotr const formatDate = (date, locales = 'id-ID', conf = {}) =>{
    const config = {
        year: conf.year ?? 'numeric',
        month: conf.month ?? 'long',
        day: conf.day ?? 'numeric'
        }
        return new Date(date).toLocaleDateString(locales, config)
}
