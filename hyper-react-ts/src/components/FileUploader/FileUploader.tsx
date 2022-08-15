import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import useFileUploader from './useFileUploader';

export type FileType = File & {
    preview?: string;
    formattedSize?: string;
};

type FileUploaderProps = {
    onFileUpload?: (files: FileType[]) => void;
    showPreview?: boolean;
};

const FileUploader = ({ showPreview = true, onFileUpload }: FileUploaderProps) => {
    const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview);

    return (
        <>
            <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)}>
                {({ getRootProps, getInputProps }) => (
                    <div className="dropzone ratio ratio-1x1" style={{ position: "absolute", width: 150, height: 150, zIndex: -100 }}>
                        <div className="dz-message needsclick" {...getRootProps()}>
                            <input {...getInputProps()} />
                        </div>
                    </div>
                )}
            </Dropzone>

            {/* {showPreview && selectedFiles.length > 0 && (
                <div className="dropzone-previews mt-3" id="uploadPreviewTemplate">
                    {(selectedFiles || []).map((f, i) => {
                        return (
                            <Card className="mt-1 mb-0 shadow-none border" key={i + '-file'}>
                                <div className="p-2">
                                    <Row className="align-items-center">
                                        {f.preview && (
                                            <Col className="col-auto">
                                                <img
                                                    data-dz-thumbnail=""
                                                    className="avatar-sm rounded bg-light"
                                                    alt={f.name}
                                                    src={f.preview}
                                                />
                                            </Col>
                                        )}
                                        {!f.preview && (
                                            <Col className="col-auto">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title bg-primary rounded">
                                                        {f.type.split('/')[0]}
                                                    </span>
                                                </div>
                                            </Col>
                                        )}
                                        <Col className="ps-0">
                                            <Link to="#" className="text-muted fw-bold">
                                                {f.name}
                                            </Link>
                                            <p className="mb-0">
                                                <strong>{f.formattedSize}</strong>
                                            </p>
                                        </Col>
                                        <Col className="text-end">
                                            <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                                                <i className="dripicons-cross" onClick={() => removeFile(f)}></i>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            )} */}
        </>
    );
};

export { FileUploader };
