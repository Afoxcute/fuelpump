import { UploadButton } from "components/UploadButton";
import { useUploadFile } from "hooks/useUploadFile";
import { IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import clsx from "clsx";
import { useIsMutating } from "@tanstack/react-query";

import { Button } from "components/Button";
import { Input, inputStyle } from "components/Input";
import { useActiveWallet } from "hooks/useActiveWallet";
import { NFTImage } from "components/NFTImage";
import { Text } from "components/Text";
import { NFTQueryKeys } from "src/queryKeys";

export default function Create() {
  const [file, setFile] = useState<File>();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [description, setDescription] = useState("");
  const [X, setX] = useState("");
  const [telegram, setTelegram] = useState("");
  const [website, setWebsite] = useState("");
  const { isConnected, isPending } = useActiveWallet();

  const isCreatingNFT = Boolean(
    useIsMutating({
      mutationKey: [NFTQueryKeys.createNFT],
    })
  );
  const uploadFile = useUploadFile();

  const isCreateButtonDisabled =
    !name || !symbol || uploadFile.isPending || isCreatingNFT;

  return (
    <>
      {isPending ? (
        <Text>Loading...</Text>
      ) : isConnected ? (
        <div className="flex flex-col items-center">
          <div className="gradient-border rounded-2xl sm:w-[75%]">
            <div className="grain rounded-2xl p-1.5 drop-shadow-xl">
              <Stack
                spacing={2}
                className={clsx(
                  "dark:gradient-border",
                  "h-full",
                  "rounded-xl",
                  "bg-gradient-to-b",
                  "from-zinc-300",
                  "to-zinc-200",
                  "dark:bg-gradient-to-b",
                  "dark:from-zinc-900",
                  "dark:to-zinc-950/80",
                  "px-4",
                  "py-8"
                )}
              >
                <Text variant="h4" sx={{ paddingBottom: "28px" }}>
                  Create New Meme $
                </Text>
                <Text>Upload File</Text>
                <Stack
                  alignItems="center"
                  justifyContent="space-around"
                  alignSelf="center"
                  sx={{
                    border: "1px dashed",
                    borderColor: "#434343",
                    borderRadius: "15px",
                  }}
                  className="px-8 pb-8 pt-6"
                >
                  {file ? (
                    <>
                      <IconButton
                        onClick={() => setFile(undefined)}
                        sx={{
                          alignSelf: "end",
                          padding: "0px",
                          marginRight: "-30px",
                          marginTop: "-10px",
                        }}
                        className="text-zinc-800 dark:text-white"
                      >
                        <CloseIcon />
                      </IconButton>
                      <div className="w-[240px] md:w-[332px] lg:w-[510px]">
                        <NFTImage src={URL.createObjectURL(file)} />
                      </div>
                    </>
                  ) : (
                    <Stack spacing={2}>
                      <Text>
                        Recommended size: 350 x 350. File types supported: JPG,
                        PNG, or GIF.
                      </Text>
                      <UploadButton setFile={setFile} />
                    </Stack>
                  )}
                </Stack>
                <Text>Name</Text>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ahmed"
                />
                <Text>Ticker</Text>
                <Input
                  value={symbol}
                  onChange={(event) => setSymbol(event.target.value)}
                  placeholder="AD"
                />
                <Text>Description (Optional)</Text>
                <TextField
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Ahmed is the hero of Rust SDK"
                  multiline
                  rows={4}
                  className={clsx([...inputStyle])}
                  inputProps={{
                    className:
                      "text-black placeholder:text-black dark:placeholder:text-zinc-400 dark:text-zinc-50",
                  }}
                />

                <Text>X (Optional)</Text>
                <TextField
                  value={X}
                  onChange={(event) => setX(event.target.value)}
                  placeholder="https://x.com/fuelpump"
                  multiline
                  rows={4}
                  className={clsx([...inputStyle])}
                  inputProps={{
                    className:
                      "text-black placeholder:text-black dark:placeholder:text-zinc-400 dark:text-zinc-50",
                  }}
                />

                <Text>Telegram (Optional)</Text>
                <TextField
                  value={telegram}
                  onChange={(event) => setX(event.target.value)}
                  placeholder="https://t.me/fuelpump"
                  multiline
                  rows={4}
                  className={clsx([...inputStyle])}
                  inputProps={{
                    className:
                      "text-black placeholder:text-black dark:placeholder:text-zinc-400 dark:text-zinc-50",
                  }}
                />

                <Button
                  disabled={isCreateButtonDisabled}
                  className={isCreateButtonDisabled ? "text-white" : ""}
                  onClick={() => {
                    if (file) {
                      uploadFile.mutateAsync({
                        fileToUpload: file,
                        name,
                        description,
                        symbol,
                      });
                    }
                  }}
                >
                  {uploadFile.isPending
                    ? "Uploading to IPFS..."
                    : isCreatingNFT
                    ? "Creating NFT..."
                    : "Create MemeCoin"}
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-mono mb-5 text-white">Create</h3>
          <p className="text-white/60 text-sm">
            Please connect your wallet to create an NFT.
          </p>
        </div>
      )}
    </>
  );
}
