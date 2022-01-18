function InfoItem({type, text}) {
    return (
        <div className="text-sm flex flex-col items-center w-15 text-dark-purple mx-4 mt-4">
            <p className="font-semibold">{type}</p>
            <p>{text}</p>
        </div>
    )
}

export default InfoItem;