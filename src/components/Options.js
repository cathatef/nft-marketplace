import React from "react";
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExploreIcon from '@mui/icons-material/Explore';
import StoreIcon from '@mui/icons-material/Store';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "../styles/Options.css"

const Options = () => {

  return (
    <>
    <div id="titles-wrapper">
        <Typography variant="h3" className="header">
            Marketplace is a web3 NFTs marketplace
        </Typography>
        <Typography subtitle1='h2'className="subtitle">
            We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. 
            In web3, your creativity is valued and your digital objects belong to you.
        </Typography>
    </div>

    <div id="options-wrapper">
        <Card className="option-card">
        <CardContent className="option-card-content">
            <Typography sx={{ fontSize: 20 }} color="#495057" gutterBottom>
                Explore NFTs
            </Typography>
            <ExploreIcon className="card-icon"></ExploreIcon>
        </CardContent>
        </Card>

        <Card className="option-card">
        <CardContent className="option-card-content">
            <Typography sx={{ fontSize: 20 }} color="#495057" gutterBottom>
                Buy your favourite NFT
            </Typography>
            <StoreIcon className="card-icon"></StoreIcon>
        </CardContent>
        </Card>

        <Card className="option-card">
        <CardContent className="option-card-content">
            <Typography sx={{ fontSize: 20 }} color="#495057" gutterBottom>
                Upload NFTs
            </Typography>
            <DriveFolderUploadIcon className="card-icon"></DriveFolderUploadIcon>
        </CardContent>
        </Card>
    </div>
    
    </>
  );
};

export default Options;
