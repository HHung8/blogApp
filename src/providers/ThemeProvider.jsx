"use client"
import { ThemeContext } from "../context/ThemeContext";
import React, { useContext, useEffect, useState } from "react"
// Khai báo function components có tên là ThemeProvider, function này nhận 1 prop là children 
// Childrent thường là những phần tử con được truyền vào components 
const ThemeProvider = ({children}) => {
  const {theme} = useContext(ThemeContext); // Use Context được sử dụng để lấy giá trị của ThemeContext;
  const [mounted, setMounted] = useState(false) // Khai báo state với giá trị ban đầu là false
  // Sử dụng useEffect, khi component được render lần đầu tiên, nó sẽ thiết lập state mouted thành true,
  // Dấu [] ở cuối đảm bảo rằng useEffect chỉ chạy 1 lần sau khi compoents được mount tương tự như hành vi components DidMount
  useEffect(() => {
    setMounted(true)
  },[])
  // Kiểm tra xem components đã được mouted lên DOM chưa  
  // Nếu đã được Mounted trả về div, với theme và children những phần tử con của provider nếu chưa thì không trả về gì cả trên trang web
  if(mounted) {
    return <div className={theme} >{children}</div>
  }
}

export default ThemeProvider