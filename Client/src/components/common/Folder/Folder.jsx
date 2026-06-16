import { useState } from 'react';


const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredPaper, setHoveredPaper] = useState(null);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setHoveredPaper(null);
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = index => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)';
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -100%) rotate(5deg)';
    return '';
  };

  return (
    <div style={scaleStyle} className={`inline-block select-none ${className}`}>
      <div
        className={`relative transition-all duration-200 ease-in cursor-pointer group`}
        style={{
          ...folderStyle,
          transform: (open || (!open && isHovered)) ? 'translateY(-8px)' : undefined
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-[0_10px_10px_10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-[5px_5px_0_0]"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((item, i) => {
            let sizeStyle = {};
            if (i === 0) sizeStyle = { width: '70%', height: '80%' };
            if (i === 1) sizeStyle = { width: '80%', height: open ? '80%' : '70%' };
            if (i === 2) sizeStyle = { width: '90%', height: open ? '80%' : '60%' };

            const scale = (open && hoveredPaper === i) ? 'scale(1.1)' : '';
            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px) ${scale}`
              : (isHovered ? 'translate(-50%, 0)' : 'translate(-50%, 10%)');

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                onMouseEnter={() => setHoveredPaper(i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out rounded-[10px] overflow-hidden flex items-center justify-center text-[0.6rem] text-black shadow-[0_2px_5px_rgba(0,0,0,0.1)]`}
                style={{
                  ...sizeStyle,
                  transform: transformStyle,
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                }}
              >
                {item}
              </div>
            );
          })}
          <div
            className="absolute z-30 w-full h-full transition-all duration-300 ease-in-out rounded-[5px_10px_10px_10px] origin-bottom"
            style={{
              backgroundColor: color,
              transform: (open || isHovered) ? 'skew(15deg) scaleY(0.6)' : undefined
            }}
          ></div>
          <div
            className="absolute z-30 w-full h-full transition-all duration-300 ease-in-out rounded-[5px_10px_10px_10px] origin-bottom"
            style={{
              backgroundColor: color,
              transform: (open || isHovered) ? 'skew(-15deg) scaleY(0.6)' : undefined
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
