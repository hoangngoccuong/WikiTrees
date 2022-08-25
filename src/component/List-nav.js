import React from 'react';
import '../css/List-nav.css'

export default function Contenbody() {
    return (
        <nav className="nav">
          <ul>
          <h3 className="conten-nav">Các chuyên mục</h3>
            <li><button>Cây cảnh</button></li>
            <li><button>Cây văn phòng</button></li>
            <li><button>Cây ăn quả</button></li>
            <li><button>Cây thuốc</button></li>
            <li><button>Cây làm gỗ</button></li>
            <li><button>Cây thiên nhiên</button></li>
          </ul>
        </nav>
    )
}
