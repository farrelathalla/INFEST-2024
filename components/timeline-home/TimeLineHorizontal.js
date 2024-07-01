"use client";

import React, { useRef, useState } from "react";
import "./timeline.css";

const TimeLineHorizontal = () => {
    const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    const slider = sliderRef.current;
    setIsDragging(true);
    const pageX = e.pageX || e.touches[0].pageX;
    setStartX(pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const move = (e) => {
    if (!isDragging) return;
    const slider = sliderRef.current;
    const pageX = e.pageX || e.touches[0].pageX;
    const x = pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  };

  return (
    <div
      className="flex parent no-scrollbar p-8"
      ref={sliderRef}
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onMouseMove={move}
      onTouchStart={startDragging}
      onTouchEnd={stopDragging}
      onTouchMove={move}
      style={{ overflowX: 'auto', cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <ul className="timeline child">
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <p className="poppins-semibold">BCC Registration</p>
            <span className="poppins-medium">1 - 13 Juli 2024</span>
          </div>
          <div className="timeline-middle">
            <img src="/ellipse.svg"></img>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/ellipse.svg"></img>
          </div>
          <div className="timeline-end timeline-box">
            <p className="poppins-semibold">ERC Registration</p>
            <span className="poppins-medium">1 - 13 Juli 2024</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <p className="poppins-semibold">
              Pengerjaan<br></br>Infografis BCC
            </p>
            <span className="poppins-medium">15 - 29 Juli 2024</span>
          </div>
          <div className="timeline-middle">
            <img src="/ellipse.svg" ></img>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/ellipse.svg"></img>
          </div>
          <div className="timeline-end timeline-box">
            <p className="poppins-semibold">Pengerjaan Paper ERC</p>
            <span className="poppins-medium">29 Juli - 29 Agustus 2024</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <p className="poppins-semibold">Pengumuman Qualification Round</p>
            <span className="poppins-medium">1 - 13 Juli 2024</span>
          </div>
          <div className="timeline-middle">
            <img src="/ellipse.svg"></img>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/ellipse.svg"></img>
          </div>
          <div className="timeline-end timeline-box">
            <p className="poppins-semibold">Pre-Event INFEST 2024</p>
            <span className="poppins-medium">10 - 11 Agustus 2024</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <p className="poppins-semibold">Pengerjaan Paper BCC</p>
            <span className="poppins-medium">3 - 21 Agustus 2024</span>
          </div>
          <div className="timeline-middle">
            <img src="/ellipse.svg" ></img>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/ellipse.svg" ></img>
          </div>
          <div className="timeline-end timeline-box">
            <p className="poppins-semibold">Pengumuman Finasil BCC</p>
            <span className="poppins-medium">4 September 2024</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <p className="poppins-semibold">Pengerjaan Presentasi BCC</p>
            <span className="poppins-medium">4 - 22 September 2024</span>
          </div>
          <div className="timeline-middle">
            <img src="/ellipse.svg" ></img>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/ellipse.svg" ></img>
          </div>
          <div className="timeline-end timeline-box">
            <p className="poppins-semibold">Pengumuman Finalis ERC</p>
            <span className="poppins-medium">12 September 2024</span>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <p className="poppins-semibold">Pengerjaan Presentasi ERC</p>
            <span className="poppins-medium">12 - 25 September 2024</span>
          </div>
          <div className="timeline-middle">
            <img src="/ellipse.svg"></img>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/ellipse.svg" ></img>
          </div>
          <div className="timeline-end timeline-box">
            <p className="poppins-semibold">Main Event INFEST 2024</p>
            <p className="poppins-semibold">Presentasi BCC & ERC</p>
            <span className="poppins-medium">5 Oktober 2024</span>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default TimeLineHorizontal;
