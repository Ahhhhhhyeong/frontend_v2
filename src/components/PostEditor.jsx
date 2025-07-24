// src/components/PostEditor.jsx
// 다단계 이미지 선택 및 게시물 작성을 위한 에디터 모달입니다.

import React, { useState } from 'react';

// --- 아이콘 컴포넌트들 ---
const XIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;
const ChevronDownIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>;
const ArrowLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>;
const TagIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.59 4.59L4.59 17.59m0-13l13 13a2.001 2.001 0 00-2.828 0L4.59 14.762a2.001 2.001 0 000-2.828L14.762 4.59a2.001 2.001 0 002.828 0zM12 12h.01"></path></svg>;

// --- 데이터 ---
// 갤러리에 보여줄 가짜 이미지 데이터
const galleryImages = [
    'https://images.unsplash.com/photo-1523341232997-786d65a40b83?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1587393855524-7ab3f96c976d?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590165482129-1b8b2170c396?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=400&auto=format&fit=crop', 'https://images.unsplash.com/photo-1562016600-ece13e8ba583?q=80&w=400&auto=format&fit=crop',
];

// --- 컴포넌트 ---
export default function PostEditor({ onClose, onCreatePost }) {
    const [step, setStep] = useState('selection');
    const [selectedImages, setSelectedImages] = useState([galleryImages[0]]);
    const [caption, setCaption] = useState('');

    const handleImageSelect = (imgUrl) => {
        setSelectedImages(prev => {
            if (prev.includes(imgUrl)) {
                if (prev.length === 1) return prev;
                return prev.filter(url => url !== imgUrl);
            } else {
                return [...prev, imgUrl];
            }
        });
    };

    const handleNext = () => {
        if (selectedImages.length > 0) setStep('caption');
    };
    const handleBack = () => setStep('selection');

    const handleShare = () => {
        const newPost = {
            id: Date.now(),
            farmName: '나의 농장',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
            content: [caption],
            image: selectedImages[0],
            images: selectedImages,
            likes: '0',
            comments: '0',
            // --- 바뀐 부분 시작 ---
            // 새로 만든 게시물에도 상품 태그(툴팁) 기능을 사용할 수 있도록
            // taggedProducts 속성을 빈 배열로 추가해줍니다.
            taggedProducts: [],
            // --- 바뀐 부분 끝 ---
        };
        onCreatePost(newPost);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col font-sans">
            {step === 'selection' && (
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-3 border-b">
                        <button onClick={onClose}><XIcon /></button>
                        <div className="flex items-center space-x-1 font-bold text-lg"><span>최근 항목</span><ChevronDownIcon /></div>
                        <button onClick={handleNext} className={`font-bold text-lg ${selectedImages.length > 0 ? 'text-blue-500' : 'text-gray-400'}`}>다음</button>
                    </div>
                    <div className="flex-grow bg-gray-900 flex items-center justify-center overflow-hidden">
                        {selectedImages.length > 0 && <img src={selectedImages[0]} alt="Selected" className="max-w-full max-h-full object-contain" />}
                    </div>
                    <div className="grid grid-cols-4 h-1/3 overflow-y-auto">
                        {galleryImages.map((img, index) => {
                            const isSelected = selectedImages.includes(img);
                            const selectionOrder = selectedImages.indexOf(img) + 1;
                            return (
                                <div key={index} className="aspect-square relative" onClick={() => handleImageSelect(img)}>
                                    <img src={img} alt={`gallery item ${index}`} className={`w-full h-full object-cover cursor-pointer transition-opacity ${isSelected ? 'opacity-60' : 'opacity-100'}`} />
                                    {isSelected && (
                                        <div className="absolute inset-0 border-4 border-blue-500 flex items-end justify-end p-1">
                                            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">{selectionOrder}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {step === 'caption' && (
                <>
                    <div className="flex justify-between items-center p-3 border-b">
                        <button onClick={handleBack}><ArrowLeftIcon /></button>
                        <span className="font-bold text-lg">새 게시물</span>
                        <button onClick={handleShare} className="font-bold text-lg text-blue-500">공유</button>
                    </div>
                    <div className="p-4 flex space-x-3 border-b">
                        <img src={selectedImages[0]} alt="Selected for caption" className="w-16 h-16 object-cover rounded-md" />
                        <textarea value={caption} onChange={(e) => setCaption(e.target.value)} className="flex-grow h-16 focus:outline-none text-base" placeholder="문구 입력..." />
                    </div>
                    <div className="p-4 flex justify-between items-center border-b">
                        <div className="flex items-center space-x-3"><TagIcon /><span className="text-base">상품 태그</span></div>
                        <ChevronDownIcon className="transform -rotate-90" />
                    </div>
                </>
            )}
        </div>
    );
}
