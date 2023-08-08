import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG1 from './images/img-1.jpg';
import IMG2 from './images/img-2.jpg';
import IMG3 from './images/img-3.jpg';
import IMG4 from './images/img-4.jpg';
import IMG5 from './images/img-5.jpg';
import IMG6 from './images/img-6.jpg';
import IMG7 from './images/img-7.jpg';
import IMG8 from './images/img-8.jpg';
import IMG9 from './images/img-9.jpg';
import React, { useState, useEffect } from 'react';

function HomePage()
{
    const [response, setResponse] = useState([]);

    useEffect(() => {
        async function getDataFromNewsApi() {
            try {
                const result = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-07-08&sortBy=publishedAt&apiKey=baae83835ab7414899f77687ec42b750", {
                    method: 'GET',
                });
                const data = await result.json();
                console.log(data);
                setResponse(data.articles); // Assuming "articles" is the key containing the array of articles
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getDataFromNewsApi();
    }, []);

    return (
        <div className="news-list row">
            <div className="col-md-12">
                <div className="row">
                    {response.length > 0 &&
                        response.map((article,index) => (
                            <div className="col-md-3">
                                <Card style={{ width: '100%' }} className="nav-card">
                                <Card.Img variant="top" classname="card-img" src={article.urlToImage}/>
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                    {article.description.slice(0,100)}...
                                    </Card.Text>
                                    <a href={article.url} className='primary' target='_blank'>Read Full Article</a>
                                </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <div className="col-md-3 latest-news">
                <h1 className="latest-news-heading">Latest News</h1>
                <div className="container">
                    <div className="image">
                        <Card style={{ width: '100%' }} className="nav-card">
                        <Card.Img variant="top" src={IMG7}/>
                        </Card>
                    </div>
                    <div className="text">
                        <p className="news-category">Business</p>
                        <p>Your text goes here.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="image">
                        <Card style={{ width: '100%' }} className="nav-card">
                        <Card.Img variant="top" src={IMG8}/>
                        </Card>
                    </div>
                    <div className="text">
                        <p className="news-category">Sports</p>
                        <p>Your text goes here.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="image">
                        <Card style={{ width: '100%' }} className="nav-card">
                        <Card.Img variant="top" src={IMG9}/>
                        </Card>
                    </div>
                    <div className="text">
                        <p className="news-category">Bollywood</p>
                        <p>Your text goes here.</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default HomePage