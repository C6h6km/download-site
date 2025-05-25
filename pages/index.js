import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 创建一个下载链接
    const downloadLink = document.createElement('a');
    downloadLink.href = '/system.txt';
    downloadLink.download = 'system.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // 设置延迟跳转到百度
    setTimeout(() => {
      window.location.href = 'https://www.baidu.com';
    }, 1000);
  }, []);

  return (
    <div style={{ 
      width: '100%',
      height: '100vh',
      background: 'white'
    }}></div>
  );
} 