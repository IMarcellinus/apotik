import React from "react";
import { changeStatusOrder, createOrder, getListOrder, inputResi } from "../../services/Order/api";
import useDebounce from "../../hooks/useDebounce";
import Swal from "sweetalert2";
import { useAuthContext } from "../AuthContext/AuthContext";

export const OrderContext = React.createContext()

export const useOrderContext = () => {
    return React.useContext(OrderContext)
}

const OrderContextProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [id, setId] = React.useState(0)
    const [productId, setProductId] = React.useState(0)
    const [quantity, setQuantity] = React.useState(0)
    const [fixPrice, setFixPrice] = React.useState(0)
    const [status, setStatus] = React.useState(0)
    const [price, setPrice] = React.useState(0)
    const [foto, setFoto] = React.useState([])
    const [type, setType] = React.useState(0)
    const [noHp, setNoHp] = React.useState(0)
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [noResi, setNoResi] = React.useState("")
    const [alamat, setAlamat] = React.useState("")
    const [note, setNote] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [orders, setOrders] = React.useState([])
    const [isShipping, setIsShipping] = React.useState(false)
    const [typeFilter, setTypeFilter] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)
    const [isDetail, setIsDetail] = React.useState(false)
    const [openDibayar, setOpenDibayar] = React.useState(false)

    const handleOpenModal = () => {
        setNoResi("")
        setIsOpen(true)
    }

    const handleOpenOrder = (id, price) => {
        setProductId(id)
        setFixPrice(price)
        setIsOpen(true)
    }

    const handleOpenDibayar = (id) => {
        setIsOpen(true)
        setId(id)
        setType(1)
        setOpenDibayar(true)
    }

    const handleOpenResep = () => {
        setIsOpen(true)
    }

    const handleResetState = () => {
        setId(0)
        setQuantity(0)
        setStatus(0)
        setPrice(0)
        setFoto([])
        setType(0)
        setNoHp(0)
        setName("")
        setEmail("")
        setNoResi("")
        setAlamat("")
        setNote("")
        setIsOpen(false)
        setIsDetail(false)
        setOpenDibayar(false)
    }

    const handleCloseModal = () => {
        handleResetState()
    }

    const handleCreateOrder = async() => {
        try {
            await createOrder({
                product_name: productId,
                quantity: String(quantity),
                price: String(price),
                type: String(1),
                no_hp: noHp,
                name: name,
                email: email,
                alamat: alamat,
                note: note
            })
            Swal.fire({
                icon: 'success',
                title: 'Order Berhasil',
            })
            handleCloseModal()
        } catch (error) {
            console.log(error)
        }
    }

    const createOrderByResep = async() => {
        try {
            const formData = new FormData()
            for (let i = 0; i < foto.length; i++) {
                formData.append('image', foto[i])
            }
            formData.append('quantity', String(quantity))
            formData.append('type', String(2))
            formData.append('no_hp', noHp)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('alamat', alamat)
            formData.append('note', note)
            await createOrder(formData)
            Swal.fire({
                icon: 'success',
                title: 'Order Berhasil',
            })
            handleCloseModal()
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetOrders = async () => {
        setIsLoading(true)
        try {
            const response = await getListOrder({
                type: typeFilter
            })
            handleResetState()
            setOrders(response.orders)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDetail = (data) => {
        console.log(data)
        setName(data.name)
        setEmail(data.email)
        setNoHp(data.no_hp)
        setAlamat(data.alamat)
        setNote(data.note)
        setStatus(data.status)
        setPrice(data.price)
        setQuantity(data.quantity)
        setNoResi(data.noresi)
        setFoto(data.imageUrl[0])
        setType(data.type)
        setIsDetail(true)
        setIsOpen(true)
    }

    const handleChangeStatusDibayar = async() => {
        try {
            await changeStatusOrder(id, {
                type: 1,
                price
            })
            handleGetOrders()
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeStatus = async(id, status) => {
        try {
            await changeStatusOrder(id, {
                type: status
            })
            handleGetOrders()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputResi = async() => {
        try {
            await inputResi(id, {
                noresi: noResi,
                type: 2
            })
            handleGetOrders()
        } catch (error) {
            console.log(error)
        }
    }

    // useDebounce(handleGetOrders, 500, [typeFilter])

    const valueContext = {
        id,
        setId,
        quantity,
        setQuantity,
        status,
        setStatus,
        price,
        setPrice,
        foto,
        setFoto,
        type,
        setType,
        noHp,
        setNoHp,
        name,
        setName,
        email,
        setEmail,
        noResi,
        setNoResi,
        alamat,
        setAlamat,
        note,
        setNote,
        isLoading,
        setIsLoading,
        orders,
        setOrders,
        isShipping,
        setIsShipping,
        typeFilter,
        setTypeFilter,
        isOpen,
        setIsOpen,
        isDetail,
        setIsDetail,
        handleGetOrders,
        handleDetail,
        handleChangeStatus,
        handleInputResi,
        handleCloseModal,
        handleOpenModal,
        handleCreateOrder,
        createOrderByResep,
        handleOpenOrder,
        handleOpenResep,
        handleOpenDibayar,
        openDibayar,
        setOpenDibayar,
        handleChangeStatusDibayar
    }

    React.useEffect(() => {
        if (isDetail) return
        setPrice(quantity * fixPrice)
    }, [quantity])

    return (
        <OrderContext.Provider value={valueContext}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider