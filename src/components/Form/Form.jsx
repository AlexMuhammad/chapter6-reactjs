import Button from "../Button/Button"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//     SelectGroup,
//     // SelectLabel
// } from "@teovilla/shadcn-ui-react-select"
// import { Select, Option } from "@material-tailwind/react";

const FormFilterInput = () => {
    return (
        <div className='h-full max-w-full'>
            <div className='container w-[90%] h-full mx-auto px-36'>
                <form>
                    <div className='flex items-center px-5 py-6 space-x-4 bg-white rounded-md -mt-14 drop-shadow-md'>
                        <div className="w-full space-y-2">
                            <label htmlFor="dateInput" className="text-[12px]">Tipe Driver</label>
                            <select className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray h-9 w-full outline-bnr-green">
                                <option value="" defaultValue>Pilih Driver</option>
                                <option value="Dengan Sopir">Dengan Sopir</option>
                                <option value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="w-full space-y-2">
                            <label htmlFor="dateInput" className="text-[12px]">Tanggal</label>
                            <input type="date" placeholder='Pilih Tanggal' className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray w-full outline-bnr-green" />
                        </div>
                        <div className="w-full space-y-2">
                            <label htmlFor="pickUpDateInput" className="text-[12px]">Waktu Jemput/Ambil</label>
                            <input type="time" placeholder='Pilih Waktu' className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray w-full outline-bnr-green" />
                        </div>
                        <div className="w-full space-y-2">
                            <label htmlFor="customerInput" className="text-[12px]">Jumlah Penumpang (optional)</label>
                            <input type="text" placeholder='Jumlah Penumpang' className="rounded-sm text-[12px] px-3 py-2 border border-bnr-dark-gray w-full outline-bnr-green" />
                        </div>
                        <div className="">
                            <Button />
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default FormFilterInput