
export default function ResultsTable({ data }: {data: any[]}) {
    return (
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 overflow-x-auto">
            <table className="w-full text-white border-collapse">
                <thead>
                    <tr className="border-b border-white/20">
                        <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">Rank</th>
                        <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">Full Name</th>
                        <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">Country</th>
                        <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">School</th>
                        <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">Medal</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.value.___id___ || index} className="border-b border-white/10 hover:bg-white/5">
                            <td className="py-4 px-4 font-medium">{item.value.rank}</td>
                            <td className="py-4 px-4">{item.value.fullname}</td>
                            <td className="py-4 px-4">{item.value.country}</td>
                            <td className="py-4 px-4 text-gray-300">{item.value.school}</td>
                            <td className="py-4 px-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    item.value.medal.toUpperCase().includes('GOLD')
                                        ? 'bg-yellow-500/20 text-yellow-400' :
                                    item.value.medal.toUpperCase().includes('SILVER')
                                        ? 'bg-gray-400/20 text-gray-300' :
                                    item.value.medal.toUpperCase().includes('BRONZE')
                                        ? 'bg-amber-800/20 text-amber-300' :
                                        'bg-amber-600/20 text-amber-500'
                                }`}>
                                    {item.value.medal}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}